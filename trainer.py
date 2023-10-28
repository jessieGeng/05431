import logging
import os
from typing import Any, Dict, List, Optional, Union
import torch
from torch import Tensor
from torch import nn
from torch.nn import Module
from torch.utils.data import Dataset
from transformers.trainer import Trainer, TRAINING_ARGS_NAME
from transformers import AutoModel

logger = logging.getLogger(__name__)

class QATrainer(Trainer):
    def __init__(self, model, tokenizer, train_dataset, eval_dataset, collator):
        # model,tokenizer: name/path to the pretrained model/tokenizer
        self.model = AutoModel.from_pretrained(model) # or AutoModelForQuestionAnswering class?
        self.tokenizer = tokenizer
        self.dataset = train_dataset
        self.collator = collator  # or use the collator written?
        # self.optimizer = torch.optim.AdamW(model.parameters(), lr=5e-5)
        # self.trainer = Trainer(model=self.model,args=ModelArguments,train_dataset=self.dataset, eval_dataset=eval_dataset, data_collator=data_collator, tokenizer=self.tokenizer)

    
    def compute_loss(self, model, inputs, return_output=False):
        true_lab = inputs.pop("labels")
        outputs = model(**inputs)
        logits = outputs.logits
        loss_fct = nn.CrossEntropyLoss(weight=torch.tensor([1.0, 2.0, 3.0], device=model.device))
        loss = loss_fct(logits.view(-1, self.model.config.num_labels), true_lab.view(-1))
        return (loss,outputs) if return_output else loss
    
    def training_step(self, model: Module, inputs: Dict[str, Tensor | Any]) -> Tensor:
        return super().training_step(model, inputs)
    
    def evaluate(self, eval_dataset: Dataset | None = None, ignore_keys: List[str] | None = None, metric_key_prefix: str = "eval") -> Dict[str, float]:
        return super().evaluate(eval_dataset, ignore_keys, metric_key_prefix)