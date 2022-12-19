document.getElementById('btn').onclick = function() {
  let main = document.body;
    if (main.classList.contains('dark')) {
      main.classList.remove('dark');
    } else{
      main.classList.add('dark');
    }
}
