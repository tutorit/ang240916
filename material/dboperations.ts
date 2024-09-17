
let db:any=null;

export function startDB() {
  return new Promise((resolve,reject) => {
    if (db) resolve(db);
    else{
      let request = window.indexedDB.open("myPersonBase");
      request.onerror = function(event:any) {
        console.log("error: ",event);
        reject(event);
      };
      request.onsuccess = function(event:any) {
        db = event.target.result;
        console.log("Database opened successfully");
        db.onerror = function(event:any) {
          console.log("Database error: " + event);
        };
        resolve(db);
      };
      
      request.onupgradeneeded = function(event:any) {
        console.log("Upgrading (creating) object store");
        db = event.target.result;
        db.createObjectStore("persons", { keyPath: "id" });
        console.log("Object store created");
      };
    }
  })
}

export function readOne(id:any) {
  return new Promise((resolve,reject) => {
    let transaction = db.transaction(["persons"]);
    let store = transaction.objectStore("persons");
    let request = store.get(id);
    request.onerror = function(event:any) {
      console.log("error getting data: ",event);
      reject(event);
    };
    request.onsuccess = function(event:any) {
      resolve(event.target.name);
    };
  })
}


export function readAll():Promise<any[]> {
	let persons:any[] = [];
  return new Promise((resolve,reject)=>{
    startDB().then((db:any) => {
      let store = db.transaction("persons").objectStore("persons");
      store.openCursor().onsuccess = function(event:any) {
        let cursor = event.target.result;
        if (cursor) {
          persons.push(cursor.value);
          cursor.continue();
        }
        else resolve(persons); 
      };
    })
  })
 
}

export function stopDB() {
	db.close();
	console.log("Database closed");
}

export function savePerson(person:any) {
  return new Promise((resolve,reject) => {
    startDB().then((db:any) => {
      let transaction = db.transaction(["persons"], "readwrite");
      transaction.oncomplete = function(event:any) {
        console.log("Saved",person)
      };
     
      let store = transaction.objectStore("persons");
      let request = store.put(person);
      request.onsuccess = function(event:any) {
        resolve(event.target.result);
      };
      request.onerror = function(event:any) {
        reject(event);
      };
    })
  })
}

