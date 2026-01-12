function parseColor(v){
 let m=v.match(/Color3\.fromRGB\((\d+),(\d+),(\d+)\)/);
 return m?`rgb(${m[1]},${m[2]},${m[3]})`:"#333";
}
function parseSize(v){
 let m=v.match(/UDim2\.new\(0,\s*(\d+),0,\s*(\d+)\)/);
 return m?{w:m[1],h:m[2]}:{w:200,h:100};
}

window.renderPreview=function(code){
 const root=document.getElementById("preview");
 root.innerHTML="";
 const frame=document.createElement("div");
 if(code.includes("Frame")){
  if(code.includes("Size")){
   let s=parseSize(code);
   frame.style.width=s.w+"px";
   frame.style.height=s.h+"px";
  }
  if(code.includes("BackgroundColor3"))
   frame.style.background=parseColor(code);
  frame.style.borderRadius="14px";
  frame.style.padding="12px";
  root.appendChild(frame);
 }
};
