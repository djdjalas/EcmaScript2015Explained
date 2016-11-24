import $ from 'jquery';

export function log(content){
  $('#content').append("<h4 class = 'bg-info'>" + content + "</h4>");
  console.log(content);
}

export function logTitle(content){
  $('#content').append("<h1 class = 'bg-primary'>" + content + "</h1>");
  console.log(content);
}
