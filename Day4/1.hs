import Crypto.Hash.MD5
import qualified Data.ByteString.Char8 as C
import qualified Data.Hex as H

ch :: String -> Int -> String
ch prefix n = H.hex( C.unpack ( hash ( C.pack ( prefix ++ (show n) ) ) ) )

pch :: Int -> String
pch n = ch "ckczppom" n

bwfz :: String -> Bool
bwfz s = take 5 s == "00000"

customHashes = [ ( x ) | x <- [0..], bwfz ( pch x ) ]

main = print $ head customHashes
