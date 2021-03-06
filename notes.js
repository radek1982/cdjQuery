/*.click
✓ .hide
✓.show
✓.toggle
.slideDown
.slideUp    
.slideToggle
.fadeIn
.fadeOut
✓ .addClass
.before
.after
✓.append
✓.html 
✓ .attr
✓.val
✓.text
*/
(function($){
    var template = $('.note#note_template');
    var todo = $('ul#todo');
    var search = $('#search');

    var toggleSearch = $('#toggleSearch');
    $(toggleSearch).click(toggleSearchInput);

    $(search).hide();
    $('form').submit(preventSubmit)

    $(template).hide();
    $('.button#new').click(newNote)
    $('.note').on('click', selectNote);
    $(search).on('change paste', searchHandler);

function selectNote() {
    $(this).addClass('selected');
}


function preventSubmit(e) {
    e.preventDefault();
}

function toggleSearchInput(e) {
    $(search).toggle(); 
    e.preventDefault();

}
function searchHandler(e) {
    var val = $(this).val();
   // alert("searching for:" + val);

   var allNotes = $('.note');
    var matchingNotes = $('.note').filter((n) => $(n).text() == val);


     if (allNotes) {
    $(allNotes).fadeOut();
     }
     if (matchingNotes){
    $(matchingNotes).fadeIn();
     }
}
function newNote(e) {

    
    var newNote = makeNote();
    
  
    


    e.preventDefault();

   
}
function makeNote() {
    var newNote = document.createElement('div');
    $(newNote).html(template.html());
    $(newNote).show();
    $(newNote).addClass('note');
    $(newNote).on('click', selectNote);
    $(newNote).attr('contenteditable', true);
    $(todo).append(newNote);
    return newNote;
}
})(jQuery);