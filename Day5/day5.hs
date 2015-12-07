countLetter :: String -> Char -> Int
countLetter cs l = length $ filter (== l) cs

countLetters :: String -> String -> [Int]
countLetters cs ls = map (countLetter cs) ls

countVowels :: String -> Int
countVowels str = sum (countLetters str "aeiou")

twiceInRow :: String -> Bool
twiceInRow (c:cs)
  | (length cs) == 0 = False
  | c == (head cs) = True
  | otherwise = twiceInRow cs

twiceInRow [] = False

contains :: (Eq a) => [a] -> (a,a) -> Bool
contains (a:as) (m1,m2)
  | (length as) == 0 = False
  | (a == m1) && (head as) == m2 = True
  | otherwise = contains as (m1,m2)

contains [] _ = False

containsMultiple :: (Eq a) => [a] -> [(a,a)] -> Bool
containsMultiple as (m:ms) = False || contains as m || containsMultiple as ms
containsMultiple as [] = False

containsForbiddenStrings :: String -> Bool
containsForbiddenStrings str = containsMultiple str [('a','b'), ('c','d'), ('p','q'), ('x','y')]

isNiceString :: String -> Bool
isNiceString str = (containsForbiddenStrings str) == False && twiceInRow str && (countVowels str) >= 3

-- Credits: Tom Smeding
b2i :: Bool -> Int
b2i False = 0
b2i True = 1

main :: IO ()
main = do
    input <- readFile "input.txt"
    let strings = lines input
    putStrLn $ show $ sum [ 1 | str <- strings, isNiceString str ]
