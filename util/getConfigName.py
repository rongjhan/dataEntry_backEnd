from typing import List

def gen_config_name(configs:List[str],expect_name:str="config")->str:
    serial:int=0
    final_name:str = expect_name

    while(final_name in configs):
        serial += 1
        final_name = expect_name+"_"+str(serial)

    return final_name
