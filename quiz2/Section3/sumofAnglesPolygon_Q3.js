// To find the sum of interior angles of a polygon, multiply the number of triangles in the 
//polygon by 180°. The formula for calculating the sum of interior angles is ( n − 2 ) × 180 ∘ 
//where is the number of sides. All the interior angles in a regular polygon are equal. 

//found the formula from google.

function sumofAnglesofPolygon (n){
    return (n - 2) * 180;
}

console.log(sumofAnglesofPolygon(7));