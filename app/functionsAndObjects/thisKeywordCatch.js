import { log, logTitle } from '../WindowLogger';
import $ from 'jquery';

export default function(){
  logTitle('This Keyword The Catch');
  /*
      remember when we use arrow functions we do get access to attributes of the
      parent function and not the current one.

      In this case this would not work because this now does not refer to jquery click function
      and it refers to the fisrst jquery function which finds the element on the page called button.
        1.First jquery performs document get element by id function
        2.then it executes the click function.

      $('#button').click(() => {
        console.log(this);
        console.log($(this).html());
      });

      const button = document.getElementById('button');
      button.onclick = () => { alert() }

      this keyword refers to the first function invoked and not to the click function

    */

    const button = document.getElementById('button');
    button.onclick = function() {
      log($(this);
    }

    $('#button3').click( () => {
      console.log(JSON.stringify(this));
      log($(this).html());
      // //console.log($(this).html()); // error this refers to find element by id function and not click function
      // console.log('-'.repeat(40));

    });

    $('#button2').click(function() {
      console.log($(this));
      console.log($(this).html());
      console.log('-'.repeat(40));
    });

}
