from .login import login_bp
from .main import main_bp
from .home import home_bp
from .editor import edtitor_bp
from .op_data import operate_bp
from .req_data import request_bp
import re

pattern = re.compile(".*_bp$")
local=locals()

allbp = [local[k] for k in local if pattern.match(k)]
