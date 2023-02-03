function ordering() {
                    var foo = document.getElementById('notes').value;
                    var bar = $("#notes").val();


                    if (bar.includes("vegan")) {
                        document.getElementById("vegan").style.display = "block";
                    }
                    else {
                        //hide the selection block
                        document.getElementById("one").style.display = "none";

                        //var to store # of cakes
                        var sprock = document.getElementById("count").value;

                        //find out which flavor has been selected
                        var jom;
                        if (document.getElementById("plain").checked) {
                            jom = document.getElementById("plain").value;
                        }
                        else if (document.getElementById("cherry").checked) {
                            jom = document.getElementById("cherry").value;
                        }
                        else if (document.getElementById("choc").checked) {
                            jom = document.getElementById("choc").value;
                        }

                        //variables for stitching everything together
                        var baz = document.createTextNode(sprock);
                        var bones = document.createTextNode(" ");
                        var blip = document.createTextNode(jom);
                        var bob = document.createTextNode(" cheesecake(s).");

                        //unhide textblock
                        document.getElementById("two").style.display = "block";
                        document.getElementById("two").classList.add('center');

                        //add text nodes with user inputted data
                        document.getElementById("nombre").appendChild(baz);
                        document.getElementById("nombre").appendChild(bones);
                        document.getElementById("nombre").appendChild(blip);
                        document.getElementById("nombre").appendChild(bob);
                    }

                }