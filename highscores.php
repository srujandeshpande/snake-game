<?php
  $highscores = fopen("hscores.txt","r") or $highscores = [0,0,0,0,0];
  $hs = strtok($highscores,",");
  echo '<script>'
  echo 'var one = document.getElementById(\'one\');'
  one.innerHTML = json_encode($hs);
  }
 ?>
