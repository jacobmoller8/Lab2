# Lab2
DH2642  Course Lab

Jacob Möller & Hugo Bergqvist 
CMETE16


Todo:

Global:
- Implement Observers 
- Image Responsiveness  (DONE)
- Navbar (Side or Mobile)   (DONE)

Local:

dishSearchView:
- Navigation on Dishes (On click on Dish)
    - Following should happen when a dish is pressed:
        - 1. A click event is fired and caught by the controller
        - 2. The controller identifies the dish that has been pressed and sets "selectedDish" to that dish ID in the model 
        - 3. The observers get notified that the "selectedDish"-value has been changed
        - 4. The dishDetails view is built with the data concerning the current "selectedDish" from the model
        - 5. The General State Controller switches the screen to "DishDetails"

- Started but far from finished, additional reading must be done.
- Keywords on Select Dish (Search Button) (DONE)
- Add dropdown Types (from model) (DONE)

dishDetails:
- Navigation "Back to search button"
- Add to Menu button

dinnerOverview:
- Navigation on Back Buttons    (DONE)

dinnerPrintout:
- Navigation on Back Buttons    (DONE)





