padre(proceso, preparacion).
padre(proceso, posicionamiento).
padre(proceso, construccion).
padre(proceso, intercambio).
padre(proceso, revision).
padre(proceso, negociacion).
padre(proceso, acuerdo).

padre(canvas, nuestra_posicion_inicial).
padre(canvas, nuestro_interes).
padre(canvas, nuestra_mejor_alternativa).
padre(canvas, nuestra_meta).
padre(canvas, su_posicion_inicial).
padre(canvas, su_interes).
padre(canvas, su_mejor_alternativa).
padre(canvas, su_meta).
padre(canvas, fichas).
padre(canvas, propuesta).
padre(canvas, acuerdo).

padre(actors, decisionmakers).
padre(actors, influencers).
padre(actors, implementers).

padre(navegacion, proceso).
padre(navegacion, canvas).
padre(navegacion, actors).

hermano(X,Y):- padre( Z, X ), padre( Z, Y), X \== Y.
abuelo(X,Y):- padre( X, Z), padre( Z, Y ), X \== Y.
primo(X,Y):- padre(A,X), padre(B,Y), hermano(A,B).
tio(X,Y) :-  padre(Z,Y), hermano(Z,X). 
bisabuelo(X,Y):- padre(A,Y), padre( B, A), padre( X, B).
