import storageModel from "./storage";
export default class fileModel {
  constructor(fileName, storage= new storageModel()) {
    this.fileName = fileName;
    this.file = null;
    this.storage = storage
    this.index = null;
    this.getIndex();
    this.getFile()
  }

  getIndex(storage = this.storage) {
    this.index = this.storage.getStorage().documents.findIndex(
      (document) => document.name === this.fileName
    );
    if(this.index === -1){
      console.error(`File can't be founded (${this.fileName})`)
    }
  }
  getFile(safe = true) {
    this.file = this.storage.getStorage().documents[this.index]
    if(!safe){
      return this.file
    }
    return {...this.file}
  }

  updateFile(newValues) {
    Object.assign(this.file, newValues);
  }

  saveFile() {
    this.storage.updateStorage((values) => {
      values.documents[this.index] = this.file
      return values
    });
  }

  changeFileName(newName) {
    Object.assign(this.file, { name: newName });
    this.fileName = newName;
  }
}
