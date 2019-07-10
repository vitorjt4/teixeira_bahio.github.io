
#Classificação de palavras em alemão
#------------------------------

#A função de ordenação embutida do Python ordena strings pelo unicode.

#Isso é inconveniente para palavras em alemão porque coloca palavras com umlauts no final enquanto elas devem ser classificadas junto com suas vogais correspondentes.

#Essa função ajuda a classificar uma lista de palavras em alemão, como em um dicionário comum.

import sys, codecs
sys.stdout = codecs.getwriter('utf_16')(sys.stdout.buffer, 'strict')

def germanWordOrder(word):
    alphabet = 'aäbcdefghijklmnoöpqrsßtuüvwxyz'
    return tuple(
        alphabet.find(letter) 
        for letter in word.lower()
    )
    
words = [
  'ganz', 'egal', 'was', 'Händel', 'Übung', 'eins',
  'anderes', 'besonderes', 'Herz', 'Ärger', 'Muse',
  'Baum', 'Diskothek', 'Feuerhydrant', 'läuten',
  'Kissen', 'Schogot', 'Sonne', 'Schifffahrt',
  'Walnussöl', 'öde', 'Fliege', 'Muße', 'Unfug', 
  'Ode', 'lauten', 'Handel'
  ]

words.sort(key=germanWordOrder)

print(*words, sep='\n')