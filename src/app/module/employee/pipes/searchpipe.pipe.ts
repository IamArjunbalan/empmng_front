import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any[], searchKey: any):any[] {
    const result:any=[]
    // console.log(value)
    // console.log(searchKey)

    if(!value || !searchKey){return value}

    value.forEach((item:any)=>{
      if(item.Username.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    
   return result;
  }

}
