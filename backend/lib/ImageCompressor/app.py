class Converter:

    def __init__(self, taskID=None, taskFile=None, metadata=None):
        # Author's Information
        self.author = 'trojan'
        self.date = 'dd-mm-yy'
        
        
        # Converter's Information [!important]
        self.desc = 'compress image size to smaller file size'
        self.name = self.author + '_' + 'reduce image size'
        self.command = 'DocToPdf'   
        self.expected_input = '.jpg' , '.jpeg', '.png'
        
        
        
        # Converter's dependencies
        self.taskID = taskID
        self.taskFile = taskFile
        self.metadata = metadata
    
    def __repr__(self):
        return str(
            {
                "author": self.author,
                "created_At": self.date,
                "module_desc": self.desc,
                "module_name": self.name,
                "module_command": self.command,
                "input": self.expected_input,
                "ID": self.taskID,
                "FILE": self.taskFile
            }
        )
    
    
    
    def process():
        pass
