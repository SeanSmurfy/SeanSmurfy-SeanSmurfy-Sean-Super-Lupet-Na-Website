// Wait for the entire HTML document to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // ==        1. ALL 10 SPOT CONTENT DATABASE           ==
    // ======================================================
    const spotData = {
        "spot-1": {
            title: "Quezon Memorial Circle",
            img: "images/pic1.png",
            desc: "This national shrine/plaza/park is a definite must see when going to Quezon City. Aside from being home to the late president Manuel Quezon and his wife’s remains, the park is also a haven for park goers who want a nice place to chill and play.",
            details: {
                "Type": "Monument, Park",
                "Location": "R-7, Diliman, Quezon City",
                "Fee(s)": "FREE",
                "Operation Hours": "24 hours",
                "Don't Miss": "Try to visit the former president Manuel L. Quezon's tomb and learn more about our history.",
                "Activity Tips": [
                    "The park is great for picnics with the family.",
                    "You can also rent bikes here for around P70 to P100 an hour.",
                    "With a variety of food stalls, you can easily go on a food trip without breaking the bank."
                ]
            },
            embedCode: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.261075700151!2d121.07311927590476!3d14.641115976081863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b77fb1ced041%3A0x39b8b7b76f7cc7b0!2sAteneo%20Art%20Gallery!5e0!3m2!1sen!2sph!4v1763394260860!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            gmapLink: 'https://maps.app.goo.gl/ug3i4fJivxmk52ir7'
        },
        "spot-2": {
            title: "Quezon Heritage House",
            img: "images/pic2.png",
            desc: "Not many know that within the Quezon Memorial Circle sits a replica of another historical site. The Quezon Heritage House, which was formerly located in Gilmore, was transferred to the QC Memorial Circle in 2013. What used to be a weekend home for the Quezon family is now a museum dedicated to the former president.",
            details: {
                "Type": "Museum",
                "Location": "Quezon Memorial Circle, Diliman",
                "Fee(s)": "Public School Students - FREE<br>Private School Students and Non-students - P10",
                "Operation Hours": "9am to 4pm (Mondays to Saturdays)",
                "Don't Miss": "One of the main attractions in the heritage home are the two narra beds used by the president and his wife."
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        },
        "spot-3": {
            title: "La Mesa Eco Park",
            img: "images/pic3.png",
            desc: "Up north, you’ll find the famous La Mesa Eco Park and Watershed that provides potable drinking water to around 12 million residents in Metro Manila. The 33-hectare family-friendly eco park offers tons of activities for guests. The trails and wildlife in the area make it a haven for nature lovers.",
            details: {
                "Type": "Nature park",
                "Location": "Brgy. Fairview, Quezon City",
                "Fee(s)": "Students - P20<br>Adults (QC residents) - P40<br>Adults (Non-residents) - P50",
                "Operation Hours": "8am to 5pm daily",
                "Activity Tips": [
                    "Aside from the boat rides, guests can also go biking, hiking, and fishing.",
                    "Guests can also swim at the park’s unique salt-water pool."
                ]
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        },
        "spot-4": {
            title: "Bantayog ng Mga Bayani",
            img: "images/pic4.png",
            desc: "In order to commemorate the people who fought against martial law, the Bantayog ng mga Bayani was constructed. Here, you’ll find the names of these nearly 300 people enshrined on the Wall of Remembrance.",
            details: {
                "Type": "Monument, Park, Museum",
                "Location": "Bantayog Rd, Diliman, Quezon City",
                "Fee(s)": "FREE",
                "Don't Miss": "Aside from the monument, you can also check out the Bantayog museum dedicated to the people who fought during the Martial Law era."
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        },
        "spot-5": {
            title: "EDSA Shrine",
            img: "images/pic5.png",
            desc: "The EDSA Shrine was built to commemorate the 1986 People Power Revolution. It was also the site for the second peaceful demonstration that overthrew the former president Joseph Estrada.",
            details: {
                "Type": "Monument, Park, Church",
                "Location": "Brgy. Ugong Norte, Ortigas Center, Quezon City",
                "Fee(s)": "FREE",
                "Insider Info": "Bobby Manosa, the designer of the shrine, originally turned down the initial plans for the Edsa Shrine but was later on convinced to return with a different concept in mind."
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        },
        "spot-6": {
            title: "UP Diliman Campus Tour",
            img: "images/pic6.png",
            desc: "The 493-hectare university campus is mish mash collection of college buildings, sports facilities, theatres, museums, churches, retail shops, food stores, dormitories, and open greeneries. During the famous UP Fair, both students, faculty, and guests from outside the university can listen to local bands perform while enjoying good food and great vibes.",
            details: {
                "Type": "College campus, Park, Museum, Church",
                "Location": "Diliman, Quezon City",
                "Fee(s)": "FREE",
                "Operation Hours": "24 hours (except the museum and church)",
                "Activity Tips": [
                    "If you’re looking for a good place to jog in Quezon City, the UP oval is the place to go to.",
                    "Try going to UP Diliman on the week around Valentine’s Day to catch the annual UP Fair."
                ]
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        },
        "spot-7": {
            title: "Ninoy Aquino Parks & Wildlife",
            img: "images/pic7.png",
            desc: "If you’re needing a change of scenery, try visiting the easily accessible Ninoy Aquino Parks and Wildlife Center. For a very cheap price, you can enjoy a peaceful picnic or a fun trip to the zoo.",
            details: {
                "Type": "Zoological and botanical park",
                "Location": "Diliman, Quezon City",
                "Fee(s)": "P8 (Adults), P5 (Students/children)",
                "Operation Hours": "7am to 5pm (Tuesdays - Sundays)",
                "Activity Tips": [
                    "Try your skills at fishing at the park’s very own fishing village.",
                    "If you want to go on a picnic here, don’t forget to bring your own mat and garbage bag."
                ]
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        },
        "spot-8": {
            title: "Art in Island 3D Museum",
            img: "images/pic8.png",
            desc: "This unique destination located in the hipster neighborhood of Cubao Expo has been dubbed as the world’s first selfie museum. The beautiful 3D paintings encourage guests to take selfies with themselves as the center piece.",
            details: {
                "Type": "3D Art Museum",
                "Location": "175 15th Ave., Brgy. Socorro",
                "Fee(s)": "P500 (Adults), P400 (Students)<br>*Senior citizen and PWDs cardholders have discounts.",
                "Operation Hours": "9:30am to 9pm (Tuesdays to Sundays and holidays)",
                "Activity Tips": [
                    "Check out their Facebook page (@artinisland) so you can prepare your creative shots.",
                    "Shoes, food and drinks, pets and tripod are not allowed inside the galleries."
                ]
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        },
        "spot-9": {
            title: "AFP Museum",
            img: "images/pic9.png",
            desc: "Learn more about the Philippine Army as a whole and its history at the Armed Forces of the Philippines Museum. Inside, you can also get a glimpse of the kinds of arms and weaponry that the military uses.",
            details: {
                "Type": "Museum",
                "Location": "Camp Aguinaldo",
                "Fee(s)": "P25 (Adults), P20 (Children)",
                "Operation Hours": "9am to 5pm (Mondays – Fridays)"
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        },
        "spot-10": {
            title: "Ateneo Art Gallery",
            img: "images/pic10.png",
            desc: "Established in 1960, this gallery is now recognized as the first museum of Philippine modern art. Art enthusiasts and aficionados will find various collections of work by Filipino post war artists. Aside from their permanent collections, the gallery also hosts special exhibitions and thematic shows. The art gallery has also introduced the now prestigious annual Ateneo Art Awards for young contemporary artists.",
            details: {
                "Type": "Museum",
                "Location": "Level 2, Rizal Library Special Collections Building, Ateneo de Manila University, Katipunan Avenue, Loyola Heights",
                "Fee(s)": "FREE<br>*P30/person if group is more than 20",
                "Operation Hours": "8am to 7:30pm (Mondays – Fridays), 8am to 6pm (Saturdays), Closed on Sundays and holidays",
                "Activity Tips": [
                    "Only a limited number of visitors can be accommodated. Contact the Gallery if you want a group tour.",
                    "Check out their website (ateneoartgallery.org) to know current/upcoming exhibitions."
                ]
            },
            embedCode: '&&&-EMBED-HERE-SEAN-&&&',
            gmapLink: '&&&-GMAP-HERE-SEAN-&&&'
        }
    };


    // ======================================================
    // ==        2. GET ALL THE HTML ELEMENTS              ==
    // ======================================================
    
    // --- Modal Elements ---
    const spotCards = document.querySelectorAll('.spot-card');
    const modalOverlay = document.getElementById('spot-modal-overlay');
    const modalContent = document.getElementById('spot-modal-content');
    const modalImg = document.getElementById('spot-modal-img');
    const modalTitle = document.getElementById('spot-modal-title');
    const modalDesc = document.getElementById('spot-modal-desc');
    const modalDetailsList = document.getElementById('spot-modal-details-list');
    
    // --- UPDATED: Modal Footer Elements ---
    const modalShowMapBtn = document.getElementById('spot-modal-show-map-btn');
    const modalMapWrapper = document.getElementById('spot-modal-map-wrapper'); // The new wrapper
    const modalMapEmbed = document.getElementById('spot-modal-map-embed');
    const modalGmapBtn = document.getElementById('spot-modal-gmap-btn'); // The new "View" button

    // --- Search Elements ---
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchContainer = document.querySelector('.search-container');


    // ======================================================
    // ==        3. MODAL OPEN/CLOSE FUNCTIONS             ==
    // ======================================================

    function openModal(spotId) {
        const data = spotData[spotId];
        if (!data) return; 

        // Fill modal content
        modalImg.src = data.img;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        
        // Build details list
        modalDetailsList.innerHTML = ''; // Clear the old list
        
        for (const [key, value] of Object.entries(data.details)) {
            const li = document.createElement('li');
            if (Array.isArray(value)) {
                li.innerHTML = `<strong>${key}:</strong><ul>${value.map(tip => `<li>${tip}</li>`).join('')}</ul>`;
            } else {
                li.innerHTML = `<strong>${key}:</strong> ${value}`;
            }
            modalDetailsList.appendChild(li);
        }
        
        // --- NEW: Map Button Logic ---
        
        // 1. Reset the map state on open
        modalMapEmbed.innerHTML = '';
        modalMapWrapper.style.display = 'none';
        modalShowMapBtn.style.display = 'none';

        // 2. Check if real codes exist (i.e., they are NOT the placeholder)
        const hasEmbed = data.embedCode && data.embedCode !== '&&&-EMBED-HERE-SEAN-&&&';
        const hasGmapLink = data.gmapLink && data.gmapLink !== '&&&-GMAP-HERE-SEAN-&&&';

        // 3. If we have BOTH links, set up the map buttons
        if (hasEmbed && hasGmapLink) {
            
            // Show the "Show Map" button
            modalShowMapBtn.style.display = 'inline-block';
            
            // Set the link for the "View on Google Maps" button
            modalGmapBtn.href = data.gmapLink;
            
            // Set the click event for the "Show Map" button
            modalShowMapBtn.onclick = () => {
                modalMapEmbed.innerHTML = data.embedCode; // Load the iframe
                modalMapWrapper.style.display = 'block';  // Show the map AND the "View" button
                modalShowMapBtn.style.display = 'none';   // Hide the "Show Map" button
            };
        }
        // --- End of Map Button Logic ---

        // Show the modal
        modalOverlay.classList.add('modal-open');
        document.body.classList.add('modal-active'); 
    }

    function closeModal() {
        modalOverlay.classList.remove('modal-open');
        document.body.classList.remove('modal-active');
        
        // --- NEW: Clear map when closing ---
        modalMapEmbed.innerHTML = '';
        modalMapWrapper.style.display = 'none';
        modalShowMapBtn.style.display = 'inline-block'; // Reset button for next time
    }

    // ======================================================
    // ==        4. MODAL EVENT LISTENERS                  ==
    // ======================================================

    // Add click listener to all 10 cards
    spotCards.forEach(card => {
        card.addEventListener('click', () => {
            const spotId = card.dataset.spotId; 
            openModal(spotId);
        });
    });

    // Close modal when clicking on the dark background
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    
    // ======================================================
    // ==        5. SEARCH FEATURE LOGIC                   ==
    // ======================================================

    // Toggle search box visibility when icon is clicked
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents the document click listener from firing
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus(); // Automatically focus the input
        }
    });

    // Stop clicks inside the search box from closing it
    searchBox.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close search box if user clicks anywhere else on the page
    document.addEventListener('click', () => {
        if (searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
            searchResults.style.display = 'none';
            searchInput.value = '';
        }
    });

    // Main search filter logic
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = ''; // Clear old results

        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        const spotIds = Object.keys(spotData);
        
        const matchingSpots = spotIds.filter(id => {
            const title = spotData[id].title.toLowerCase();
            return title.includes(query);
        });

        if (matchingSpots.length > 0) {
            matchingSpots.forEach(id => {
                const title = spotData[id].title;
                const resultItem = document.createElement('a');
                resultItem.href = '#';
                resultItem.className = 'search-result-item';
                resultItem.textContent = title;
                
                // Add click event to open the modal
                resultItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    openModal(id);
                    
                    // Hide search box after clicking
                    searchBox.classList.remove('active');
                    searchResults.style.display = 'none';
                    searchInput.value = '';
                });

                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = 'block'; // Show dropdown
        } else {
            // Optional: Show "No results"
            searchResults.innerHTML = '<span class="search-no-results">No results found</span>';
            searchResults.style.display = 'block';
        }
    });

}); // End of DOMContentLoaded