let arr = [ {name: 'Ali'},{name: 'Ali'},{name: 'Ali'}, {name: 'Ali'}, {name: 'Ali'}];
  let find = 'ALI';
  let findName = arr.find(function(obj){
    return obj.name.toLowerCase() === find.toLowerCase();
  });
  console.log(findName);
  let nameToFindLast = 'LI';
  let foundNameLast = arr.find(function(obj){
    return obj.name.toLowerCase().endsWith(nameToFindLast.toLowerCase());
  });
  console.log(foundNameLast);