<?php
//taille tableau possible 4x4, 4x7, 4x9
//max 18 fruits

class Fruits {

    protected $array;

    function __construct(){

        $this->array = [
    ['fruit' => 'pomme'],
    ['fruit' => 'banane'],
    ['fruit' => 'peche'],
    ['fruit' => 'citronvert'],
    ['fruit' => 'grenadine'],
    ['fruit' => 'abricot'],
    ['fruit' => 'citronjaune'],
    ['fruit' => 'fraise'],

 /*   ['fruit' => 'pommeverte'],
    ['fruit' => 'kaki'],
    ['fruit' => 'raisin'],
    ['fruit' => 'pasteque'],
    ['fruit' => 'prune'],
    ['fruit' => 'poire'],


    ['fruit' => 'cerise'],
    ['fruit' => 'framboise'],
    ['fruit' => 'mangue'],
    ['fruit' => 'mirabelle'],*/
        ];

        $this->array = array_merge($this->array,$this->array);
    }

    function send(){
        $this->melanger();
        echo json_encode($this->array);
    }

    function melanger(){
        shuffle($this->array);
    }

}

