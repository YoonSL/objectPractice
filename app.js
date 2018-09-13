var studentList = {
    name : 'john',
    'id' : '122'
}




const call = function(name,id){
    studentList.name = name;
    studentList['id'] = id;

    console.log(studentList.name);
    console.log(studentList['id']);
}

call('hi','bye');