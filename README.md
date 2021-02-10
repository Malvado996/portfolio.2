
// Blues
Oxford Blue: #031D44


// Greens
Medium Aquamarine (green): #61e294
Bitter Lime: #baff29

// Grays
Slate Gray: #6e7e85

// Link styling:

a.button.one:before, a.button.one:after{
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  transition: all 0.3s ease;
}
a.button.one:before{
  top: -2.5%;
  left: -1%;
  border-top: 2px solid white;
  border-left: 2px solid white; 
}
a.button.one:after{
  bottom: -2.5%;
  right: -1%;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
}
a.button.one:hover:before, a.button.one:hover:after{
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}