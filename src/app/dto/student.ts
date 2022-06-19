 export class StudentDTO{

    private _id: number;
    private _name: string;
  

	public  get id() {
		return this._id;
	}

	public set id(id: number){
        this._id=id;
    }

    public  get name() {
		return this._name;
	}

	public set name(name: string){
        this._name=name;
    }

    

 

  


}