let editor;
let files=JSON.parse(localStorage.getItem("luaStudioFiles"))||{};
let current=localStorage.getItem("luaStudioCurrent");

require.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs"}});

require(["vs/editor/editor.main"],()=>{

 monaco.languages.register({id:"lua"});
 monaco.languages.registerCompletionItemProvider("lua",{
  provideCompletionItems(){
   return{suggestions:robloxAPI.map(i=>({
    label:i,kind:monaco.languages.CompletionItemKind.Function,insertText:i
   }))};
  }
 });

 editor=monaco.editor.create(document.getElementById("editor"),{
  value:"",
  language:"lua",
  theme:"vs-dark",
  automaticLayout:true,
  minimap:{enabled:false}
 });

 editor.onDidChangeModelContent(()=>{
  if(current){
   files[current]=editor.getValue();
   persist();
  }
 });

 if(!Object.keys(files).length)newFile();
 else openFile(current||Object.keys(files)[0]);
});

function newFile(){
 let n="script"+Object.keys(files).length+".lua";
 files[n]=`print("Lua Studio iniciado.")`;
 openFile(n);
}

function openFile(n){
 current=n;
 editor.setValue(files[n]);
 renderFiles();
 persist();
}

function saveFile(){persist();}

function persist(){
 localStorage.setItem("luaStudioFiles",JSON.stringify(files));
 localStorage.setItem("luaStudioCurrent",current);
}

function renderFiles(){
 const f=document.getElementById("files");
 f.innerHTML="";
 for(let n in files){
  let d=document.createElement("div");
  d.className="file"+(n===current?" active":"");
  d.innerText=n;
  d.onclick=()=>openFile(n);
  f.appendChild(d);
 }
}

function checkErrors(){
 try{luaparse.parse(editor.getValue())}
 catch(e){alert(e.message)}
}

function runScript(){
 const consoleEl=document.getElementById("console");
 consoleEl.innerHTML="";
 const print=(...a)=>log(a.join(" "),"print");
 const warn=(...a)=>log(a.join(" "),"warn");
 const error=(...a)=>log(a.join(" "),"error");
 try{new Function("print","warn","error",editor.getValue())(print,warn,error)}
 catch(e){log(e.message,"error")}
}

function log(m,t){
 let d=document.createElement("div");
 d.className="log "+t;
 d.innerText=m;
 document.getElementById("console").appendChild(d);
}

function renderPreview(){
 window.renderPreview(editor.getValue());
}
