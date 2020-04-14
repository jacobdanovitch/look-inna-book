-- Authour to revenue generated

CREATE OR REPLACE VIEW authour_to_revenue_generated as
SELECT fullname,SUM(price*quantity) FROM final.purchasedItem NATURAL JOIN final.writtenby NATURAL JOIN final.author NATURAL JOIN final.book GROUP BY fullname;

SELECT * FROM authour_to_revenue_generated;




CREATE OR REPLACE VIEW most_profitable_books as
SELECT title,asin,sum(price*quantity-(price*quantity*percentagetaken)) FROM final.purchasedItem NATURAL JOIN final.writtenby NATURAL JOIN final.author NATURAL JOIN final.book  WHERE (price*quantity-(price*quantity*percentagetaken)) > 0 GROUP by title,asin ORDER BY SUM DESC;
SELECT * FROM most_profitable_books



SELECT sum(sales) as total_profit,sum(expidentures) as total_expidentures FROM (
	SELECT title,asin,sum((price*quantity)) 
	as sales,sum((price*quantity*percentagetaken)) 
	as expidentures 
	FROM final.purchasedItem NATURAL JOIN final.writtenby NATURAL JOIN final.author NATURAL JOIN final.book  WHERE (price*quantity-(price*quantity*percentagetaken)) > 0 GROUP by title,asin
) as total_amt
