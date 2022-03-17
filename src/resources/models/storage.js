export default class storageModel {
  constructor() {
    this.storage_name = "test01";
    this.storage = JSON.parse(localStorage.getItem(this.storage_name));
    if(!this.storage){
      this.clearStorage()
    }
  }

  getStorage(safe=true){
    this.storage = JSON.parse(localStorage.getItem(this.storage_name));
    if(!safe){
      return this.storage
    }
    return {...this.storage}
  }

  save(){
    localStorage.setItem(this.storage_name, JSON.stringify(this.storage));
  }

  clearStorage(){
    console.warn("CREATING NEW STORAGE");
    this.storage = {
      documents: [
        {
          name: "New Document 0",
          content: "",
        },
      ],
    };
    this.save();
  }

  updateStorage(func){
    let storage = this.getStorage()
    const new_values = func(storage)
    this.storage = new_values
    this.save()
  }
}
