<!-- again via https://www.w3schools.com/howto/howto_js_dropdown.asp -->
 
/* When the user clicks on the button, toggle between hiding and showing  the dropdown content 
        */
        function dropMen() {
            document.getElementById("dropdown").classList.toggle("show");
        }

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }


        <!-- script for making the dropdown selection stick -->	
        $(".month").click(function () {
            var ian = $(this).attr('name');
            document.getElementById("dropName").innerHTML = ian;
        });