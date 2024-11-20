
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'gcf',
  password: 'postgres',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const getDeliveryData = async(db, deliveryId)=>{
    console.log(deliveryId , db)
	const queryData = `
			SELECT
				d."objectId" delivery_id,
				d."SubBatch"->2 sub_batch_ids_list, // name_id_changed
				t."maxMarks"::int as max_marks,
				to_char(timezone('Asia/Kolkata',d."startDateTime"), :format) as start_date_time
			FROM "Delivery" d 
			join "Test" t on d."testUri" = t.uri
			WHERE d."objectId" = "0G2OzKQJ10"
		`
    const result = await db.query(`select d."SubBatch"->2 as sub from "Delivery" d where d."objectId" = $1`,["0FTPQa23TA"])
    console.log(result.rows[0],"res")
	// const result = await getDataBasedOnQuery(db, queryData);
	return result.rows.length ? result.rows[0] : null;
};

const getMetaData = async(db , subBatchIdList)=>{
	const queryData = `
			SELECT "metaData" 
			FROM "SubBatch" s 
			WHERE 1=1
			AND s."objectId" = $1
		`
	const result = await db.query(queryData,["sQiQR6teJV"])
    console.log(result.rows[0].metaData,"MET")
	// const result = await getDataBasedOnQuery(db, queryData);
	return result.rows.length ? result.rows[0].metaData : null
}


const pushNScoreBatchToCancellationQueue = async(db, deliveryId)=>{
	const deliveryData = await getDeliveryData(db, deliveryId);
	if(!deliveryData){
		console.log("No Delivery Data");
		return;

	}
    console.log(deliveryData,"del")
	const subBatchIdList = deliveryData.sub;
    console.log(subBatchIdList)
	// const metaData = await getMetaData(db , subBatchIdList)
    console.log(metaData ,"metadata")
	let nSatFlag; 
	let nSatValuelist =[]
	for(let i= 0 ; i < metaData.length ;i++){
		if(metaData[i] && metaData[i].metaData.hasOwnProperty("is_nsat_enable")){
			nSatValuelist.push(metaData[i].metaData.is_nsat_enable)
            console.log(nSatValuelist,">>>>>")
		}
	// }
    nSatFlag = nSatValuelist.includes(true)
    console.log(nSatFlag)

    const metaData = await getMetaData(db ,"uyiuhhk")
    console.log(metaData,">>>")
    let coachingCenterFlag;
    coachingCenterFlag = metaData && metaData.coaching_center_flag
    console.log(coachingCenterFlag)
}

}


const deliveryId = "0G2OzKQJ10"
pushNScoreBatchToCancellationQueue(client , deliveryId)