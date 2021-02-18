padre(jose, luis).
padre(luis, miguel).
padre(carlos, pedro).
padre(luis, juan).
padre(jose, carlos).
padre(carlos,pepe).
padre(juan,alejandro).

hermano(X,Y):- padre( Z, X ), padre( Z, Y), X \== Y.
abuelo(X,Y):- padre( X, Z), padre( Z, Y ), X \== Y.
primo(X,Y):- padre(A,X), padre(B,Y), hermano(A,B).
tio(X,Y) :-  padre(Z,Y), hermano(Z,X). 
bisabuelo(X,Y):- padre(A,Y), padre( B, A), padre( X, B).
