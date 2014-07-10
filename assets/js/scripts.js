$( document ).ready(function() {
 
    //$('#table1').fixedHeaderTable({ footer: false, cloneHeadToFoot: false, fixedColumn: true });
 
 	


	$( "#sign-in a").click(function() {

		$("#contents > div").replaceWith( $( "#select-allocation-model-content > div" ).clone() );
		
		$( "#select-allocation-model a").click(function() {

			$("#contents > div").replaceWith( $( "#existing-or-new-content > div" ).clone() );
			$("[data-toggle='tooltip']").tooltip();
			noNumberScroll();

			$( "#allocation-tab-content a").click(function() {

				$("#contents > div").replaceWith( $( "#main-data-content > div" ).clone() );
				$("[data-toggle='tooltip']").tooltip();

				fixModalLinks();



			});

		});

	});

	
	var fixModalLinks = function () {

	    $('a.level1A').click(function () {  //reset modal to levelA content
			$('#dataModal1 > div > div').replaceWith( $( "#modal-content1A" ).clone() );
			fixModalLinks();
		});

		$('a.level1B').click(function () {
			$('#dataModal1 > div > div').replaceWith( $( "#modal-content1B" ).clone() );
			fixModalLinks();
		});

		$('a.level1C').click(function () {
			$('#dataModal1 > div > div').replaceWith( $( "#modal-content1C" ).clone() );
			fixModalLinks();
		});

	}


	$(document).on('shown.bs.modal', function() {
		fixModalLinks();
	});


	var noNumberScroll = function () {

		// disable mousewheel on a input number field when in focus
		// (to prevent Cromium browsers change the value when scrolling)
		$('form').on('focus', 'input[type=number]', function (e) {
		  $(this).on('mousewheel.disableScroll', function (e) {
		    e.preventDefault()
		  })
		})
		$('form').on('blur', 'input[type=number]', function (e) {
		  $(this).off('mousewheel.disableScroll')
		})

	}	


    //generate data

    function rchar() {
	    var chars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
    	return chars.substr( Math.floor(Math.random() * 26), 1);
	}

	function pad(num, size) {
	    var s = "000" + num;
	    return s.substr(s.length-size);
	}

	function generatedata() {
	 	var html;
	 	html += '<tbody class="text-right">'
	 	var i;
	 	var id = 1; //set start id here
	 	for (i=0; i < 100; i++) {
	 		html += '<tr>'
	 		html += '<td class="text-left">'+ rchar() + rchar() + ' ' +rchar() + rchar() + '</td>'
	 		html += '<td>' + id + '</td>'
	 		//html += '<td>' + pad(id, 4) + '</td>' //to add leading 0's
	 		html += '<td><a class="btn-link proceeds ' + id + '" data-toggle="modal" data-target=".dataModal1">' + (80 + (Math.random() * 20)).toFixed(2) + '</a></td>'
	 		html += '<td><a class="btn-link t1p1max ' + id + '" data-toggle="modal" data-target=".dataModal1">' + (100 + (Math.random() * 20)).toFixed(2) + '</a></td>'
	 		html += '<td><a class="btn-link t1p2max ' + id + '" data-toggle="modal" data-target=".dataModal1">0.00</a></td>'
	 		html += '<td>100.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td><a class="btn-link t2p1max ' + id + '" data-toggle="modal" data-target=".dataModal1">60.00</a></td>'
			html += '<td><a class="btn-link t2p2max ' + id + '" data-toggle="modal" data-target=".dataModal1">0.00</a></td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>80.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>20.00</td>'
			html += '<td>20.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>0.00</td>'
			html += '<td>120.00</td>'
			html += '<td>0.00</td>'
			html += '</tr>'
			id++
	 	}

	 	html += '</tbody>'

	 	$( "#table1 thead" ).after(html);

 	}

 	/*
 	$.when( generatedata() ).done(function(){

 		//dataTable stuff


	 	
	    var table = $('#table1').dataTable( {
	    	"paging":   false,
	        //"ordering": false,
	        "info":     false,
	        "searching": false
		});

		//new $.fn.dataTable.FixedHeader( table );

		new $.fn.dataTable.FixedHeader( table,  {
	        "offsetTop": 160,
	        //"left": true,
	        "bottom": false
	    } );

		

 	}); 
	*/

	/* resize data table to fit window */
	function resizeData () {
		var dataheight = $(window).height() - 260; 
		$(".data .tab-content").height(dataheight);
	}

	resizeData();

	window.onresize = function() {
		resizeData();
	}


	// use this to populate popups

	$(".data a").click(function () { 
		dataid = this.id;
	});



	//interactivity stuff

	$('a.level1A').click(function () {  //reset modal to levelA content
		$('#dataModal1 > div > div').replaceWith( $( "#modal-content1A" ).clone() );

	});

});



