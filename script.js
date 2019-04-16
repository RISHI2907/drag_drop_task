var id;
function allowDrop(ev)
{
  ev.preventDefault();
}

function dragStart(ev)
{
  id=ev.target.id;
  //alert(id);
  var text=document.getElementById(id);
  console.log(text);
  var canvas = document.getElementById("myCanvas");
  var ctx=canvas.getContext("2d");
  //ctx.rect(0, 0, 100, 100);
  ctx.font="10px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("qwertyuiopkjhgfdszxcvbnm,. cxzsserdtfygujioklawsedrtfghjiklmnbvcxzASzdxfgvhbjnklmnbvcxzszdxcvbhnml,mnbvhxfzszdfxgchbjnkl,;lknhvcxzsdASdzfxgbjk", 0,0);


}

function drop(ev)
{
  ev.target.append(document.getElementById(id));
}
