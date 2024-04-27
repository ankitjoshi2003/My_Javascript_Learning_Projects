const password_=document.querySelector("#password");

const shuffle = function (s) {
    var a =s.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function generate()
{
  const lower_al="abcdefghijklmnopqrstuvwxyz";
  const upper_al="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_ch="~!@#$%^&*()_+{}:;.,<>?/";
  const nums="1234567890";
  let all_chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+{}:;.,<>?/1234567890";
  all_chars=shuffle(all_chars);
  console.log(all_chars)
  let password="";
  password+=upper_al[Math.floor(Math.random()*upper_al.length)];
  password+=lower_al[Math.floor(Math.random()*lower_al.length)];
  password+=special_ch[Math.floor(Math.random()*special_ch.length)];
  password+=nums[Math.floor(Math.random()*nums.length)];
  let num=8;
  while(num--)
  {
    password+=all_chars[Math.floor(Math.random()*all_chars.length)];
  }
  password=shuffle(password);
  password_.value=password;
  return;
}
function  copy()
{
    navigator.clipboard.writeText(password_.value);
}