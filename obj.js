1. Create a Function

ans: 
function Check(obj1){
    obj1.setter = function()
    {
    console.log(this.name);
    };
}

2. Delete a Parameter

ans:

function Check(obj1) {
    if(delete obj1.rollno)
    {
      return true;
    }
      else
      {
      return false;
      }   
}

3. Check whether the Package is Dream Package or not

ans:

function Check(obj1) {
    if(obj1["salary"]>=500000)
    {
    return "Dream";
    }
    else
    {
    return "NotDream"; 
    }
}

4. Check whether the Object has a parameter or not

ans:

function Check(obj1) {
    for(var i in obj1) {
    if(obj1.hasOwnProperty(i))
    return "true";
  }
    return "false";
}

5. Merge the Objects

ans:

function Check(obj1,obj2) {
    let obj3 = Object.assign(obj1,obj2);
    {
      return obj3;
    }  
}

6. Object Multiplyer

ans:

function Check(a,obj1) {
    obj1.id = 2* (obj1.id);
    obj1.houseno = 2* (obj1.houseno);
    return (obj1);
}


7. Find the  sum of Object Members

ans:

function Check(obj1) {
    {
      return Object.values(obj1).reduce((a, b) => a + b, 0);
    }       
}

8. Check whether the Objects are same or not.

ans:

function check(obj1,a,b) {
    if(obj1.name==a && obj1.id==b)
   {
     return true;
   }
     else
   {
     return false;
   }   
}
 
 
  

  
  
