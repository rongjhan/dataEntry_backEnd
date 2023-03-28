from .user.settings import SourceConfig,TransformConfig,VizConfig
from typing import Literal,Union

CONFIG_ORM  = Union[SourceConfig,TransformConfig,VizConfig]
CONFIG_NAME = Literal["source","transform","visualize"]

def config_orm(config_type:CONFIG_NAME)->CONFIG_ORM:
    if config_type=="source":
        return SourceConfig
    elif config_type=="transform":
        return TransformConfig
    elif config_type=="visualize":
        return VizConfig
    else:
        raise ValueError("cconfigType error")
    

