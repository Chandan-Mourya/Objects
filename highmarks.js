var details = {
  data : [],
  
  addStudent : function(name1, maths1,science1, english1)
              {
                      var obj = {};
                      obj.name = name1;
                      obj.maths = maths1;
                      obj.science = science1;
                      obj.english = english1;

                      this.data.push(obj);

               },

  lowScore : function()
              {

                var lowStudent = null; 
                var lowTotal = Infinity;

                for(var i=0; i<this.data.length; i++)
                {
                  var currentStudent = this.data[i];
                  var total = currentStudent.maths + currentStudent.science + currentStudent.english;

                  if(lowTotal > total)
                  {
                    lowTotal = total;
                    lowStudent = currentStudent;
                  }

                }

                console.log(lowStudent);


              }
}


details.addStudent("Shubham", 10, 20, 30);
details.addStudent("Rajesh", 15, 25, 35);
details.addStudent("Rohit", 20, 30, 40);

console.log(details.data);

details.lowScore();
