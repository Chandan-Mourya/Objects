var data=[
              {
                grade: "V",
                students: [
                  {name: "Nrupul", marks: [10, 20, 30]},
                  {name: "Prateek", marks: [20, 30, 40]}
                ]
              },
              {
                grade: "VI",
                students: [
                  {name: "Aman", marks: [10, 20, 30]},
                  {name: "Albert", marks: [20, 30, 40]}
                ]
              },
              {
                grade: "VII",
                students: [
                  {name: "Yogesh", marks: [10, 20, 30]},
                  {name: "Sandhya", marks: [20, 30, 40]}
                ]
              }
       ] 




function calculateTotal(arr)
{
  var sum = 0;

  for(var i=0; i<arr.length; i++)
  {
    sum=sum+arr[i];
  }
  return sum;
}


function calculateHighest(info)
{
  var grade = info.grade;
  var name;

  var pad_max = -Infinity;

  for(var i=0; i<info.students.length; i++)
  {
    var total = calculateTotal(info.students[i].marks);

    if(pad_max<total)
    {
      pad_max = total;
      name = info.students[i].name;
    }

  }
  console.log(grade+"-"+name+"-"+pad_max);
}



for(var i=0; i<data.length; i++)
{
  calculateHighest(data[i]);

}
