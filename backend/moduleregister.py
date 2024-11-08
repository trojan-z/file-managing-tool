""" 
1️⃣
Automatically scan through all the modules in UFCLIB folder which contains packages and output all the modules name and command as an object and store them in a list.
The list is always returned ✅.

"""

import os
import importlib

# generate all packages from the library
__allpkg = [x for x in os.walk('lib')][0][1]

# for each package, walk-in and initialize every module
record = list()
for pkg in __allpkg:
    if pkg == '__pycache__':
        pass
    else:
        MODULE = importlib.import_module(f'lib.{pkg}.app', __package__)
        record.append(MODULE.Converter())


__all__ = ['record']