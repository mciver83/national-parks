update national_parks
set name = ${name}, location = ${location}, image_url = ${imageUrl}, description = ${description}, acres = ${acres}, date_established = ${date}
where id = ${id};

SELECT * 
FROM national_parks;