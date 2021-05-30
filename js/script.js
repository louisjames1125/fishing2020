var containerElement = document.getElementById('fish-type');
var largemouthElement = document.getElementById('LargemouthBass');
var smallmouthElement = document.getElementById('Smallmouth Bass');
var walleElement = document.getElementById('Walleye');
var catfishElement = document.getElementById('Catfish');
var carpElement = document.getElementById('Carp');
var garElement = document.getElementById('Gar');
var crappieElement = document.getElementById('Crappie');
var blueElement = document.getElementById('Bluegill');
var whiteElement = document.getElementById('White Bass');
var greenElement = document.getElementById('Green Sunfish');
var rockElement = document.getElementById('RockBass');
var freshElement = document.getElementById('Freshwater Drum');

largemouthElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Largemouth Bass</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1785.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.5731729083126!2d-86.03799717074754!3d40.490910318632054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzI3LjMiTiA4NsKwMDInMTQuOCJX!5e0!3m2!1sen!2sus!4v1622339591162!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Kokomo, Indiana</li><li><span class="text-bold">Season</span> - Summer</li><li><span class="text-bold">Lure Type</span> - Bladded Jig</li></ul></div></div>';
}

smallmouthElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Smallmouth Bass</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1864.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.6839505820834!2d-86.21006717074752!3d40.481109518781096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI4JzUyLjAiTiA4NsKwMTInMzQuMyJX!5e0!3m2!1sen!2sus!4v1622395789488!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Russiaville, Indiana</li><li><span class="text-bold">Season</span> - Spring</li><li><span class="text-bold">Lure Type</span> - Football Head Jig</li></ul></div></div>';
}

walleElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Walleye</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_0368.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.6561203559435!2d-86.14254967074756!3d40.4835719187436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzAwLjkiTiA4NsKwMDgnMzEuMiJX!5e0!3m2!1sen!2sus!4v1622395903061!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Kokomo, Indiana</li><li><span class="text-bold">Season</span> - Spring</li><li><span class="text-bold">Lure Type</span> - Swim Jig</li></ul></div></div>';
}

catfishElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Catfish</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1764.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.7951580373568!2d-85.97417317076366!3d40.47126871893067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI4JzE2LjYiTiA4NcKwNTgnMjUuMSJX!5e0!3m2!1sen!2sus!4v1622395990402!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Kokomo, Indiana</li><li><span class="text-bold">Season</span> - Summer</li><li><span class="text-bold">Lure Type</span> - N/A (Bait Used)</li></ul></div></div>';
}

freshElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Freshwater Drum</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1810.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.635336867323!2d-85.89489808428817!3d40.68200314738652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQwJzU1LjIiTiA4NcKwNTMnMzMuOCJX!5e0!3m2!1sen!2sus!4v1622396082564!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Peru, Indiana</li><li><span class="text-bold">Season</span> - Fall</li><li><span class="text-bold">Lure Type</span> - Flicker Shad</li></ul></div></div>';
}

garElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Gar</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1787.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.6839505820834!2d-86.21006717074752!3d40.481109518781096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI4JzUyLjAiTiA4NsKwMTInMzQuMyJX!5e0!3m2!1sen!2sus!4v1622395789488!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Russiaville, Indiana</li><li><span class="text-bold">Season</span> - Summer</li><li><span class="text-bold">Lure Type</span> - Whopper Plopper</li></ul></div></div>';
}

crappieElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Crappie</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1900.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.9712637144858!2d-86.30541644174745!3d39.87552525329091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDUyJzMxLjkiTiA4NsKwMTgnMTUuNiJX!5e0!3m2!1sen!2sus!4v1622396209761!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Indianapolis, Indiana</li><li><span class="text-bold">Season</span> - Spring</li><li><span class="text-bold">Lure Type</span> - Jig</li></ul></div></div>';
}

blueElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Blue Gill</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1807.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.404542152935!2d-86.05111463319086!3d40.488436574561604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI5JzE4LjQiTiA4NsKwMDInNTguNCJX!5e0!3m2!1sen!2sus!4v1622396339028!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Kokomo, Indiana</li><li><span class="text-bold">Season</span> - Summer</li><li><span class="text-bold">Lure Type</span> - N/A (Bait Used)</li></ul></div></div>';
}

whiteElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>White Bass</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1778.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1517.780903992114!2d-85.96750964174441!3d40.46283453553799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzQ2LjIiTiA4NcKwNTcnNTkuMSJX!5e0!3m2!1sen!2sus!4v1622396470119!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Kokomo, Indiana</li><li><span class="text-bold">Season</span> - Spring</li><li><span class="text-bold">Lure Type</span> - Curly Tail Jig</li></ul></div></div>';
}

greenElement.onclick = function () {
    containerElement.innerHTML = '<div class="container fishType"><a href="gallery.html"><i class="fas fa-arrow-left fa-4x"></i></a><h1>Green Sunfish</h1><div id="biggestFish"><h3>Biggest Fish:</h3><img src="./img/gallery/IMG_1773.JPG" alt="Fish" /></div><div id="location"><h3>Location:</h3><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.047806214432!2d-86.1469461842931!3d40.45207886141222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzA3LjUiTiA4NsKwMDgnNDEuMSJX!5e0!3m2!1sen!2sus!4v1622396539598!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><div class="clr"></div><div id="description"><h3>Description:</h3><ul><li><span class="text-bold">Location</span> - Kokomo, Indiana</li><li><span class="text-bold">Season</span> - Spring</li><li><span class="text-bold">Lure Type</span> - N/A (Bait Used)</li></ul></div></div>';
}
