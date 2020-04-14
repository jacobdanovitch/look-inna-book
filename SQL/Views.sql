-- Authour to revenue generated

CREATE OR REPLACE VIEW authour_to_revenue_generated as
SELECT fullname,SUM(price*quantity) FROM final.purchasedItem NATURAL JOIN final.writtenby NATURAL JOIN final.author NATURAL JOIN final.book GROUP BY fullname;

SELECT * FROM authour_to_revenue_generated;