<?php
  $highscores = fopen("hscores.txt","r") or $highscores = [0,0,0,0,0];
  $hs = strtok($highscores,",");
  <script>
  var one = document.getElementById('one');
  one.innerHTML = json_encode($hs);
  }
 ?>
