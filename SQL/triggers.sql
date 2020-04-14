DROP FUNCTION check_for_restock() cascade;


SELECT * FROM final.book LIMIT 100;

CREATE OR REPLACE FUNCTION check_for_restock()
RETURNS TRIGGER
AS $$
BEGIN
IF (TG_OP = 'UPDATE') THEN
UPDATE final.book SET inventory = inventory+(get_purchased_amount_in_past_month(asin)) WHERE inventory < 10; 
END IF;
RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER restock
    AFTER UPDATE ON final.book
    FOR EACH ROW
    EXECUTE PROCEDURE check_for_restock();

CREATE OR REPLACE FUNCTION get_purchased_amount_in_past_month(text)
RETURNS integer
AS $$
BEGIN
RETURN (SELECT purchased_recently_past_month FROM (
	SELECT asin,sum(quantity) as purchased_recently_past_month from final.purchase NATURAL JOIN final.purchasedItem NATURAL JOIN final.book  where ordertime >  CURRENT_DATE - INTERVAL '1 months' GROUP BY asin
)  as find_purchase
where asin = $1);
END;
$$
LANGUAGE plpgsql;


-- SELECT * FROM final.book LIMIT 100;

-- UPDATE final.book
-- SET inventory = 23
-- WHERE asin='830827641'; 

-- SELECT * FROM final.book where ASIN='830827641' LIMIT 100;

-- UPDATE final.book
-- SET inventory = 9
-- WHERE asin='830827641'; 
 
-- SELECT * FROM final.book where ASIN='830827641' LIMIT 100;


-- SELECT * FROM get_purchased_amount_in_past_month('830827641')
