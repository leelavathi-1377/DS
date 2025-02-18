// const arr = [[0, 9, 75, 0, 0],
//             [9, 0, 95, 19, 42],
//             [75, 95, 0, 51, 66],
//             [0, 19, 51, 0, 31],
//             [0, 42, 66, 31, 0]];

// const primsAlg = (arr) => {
//     let no_of_edge = 0;
//     let Inf = 999999;
//     let selectedList = [0, 0, 0, 0, 0];
//     let no_of_vertices = 5;
//     selectedList[0] = true;
//     while(no_of_edge < no_of_vertices - 1){
//         let  min = Inf;
//         let x = 0 ;
//         let y = 0;
//         for(let  i = 0 ; i <= no_of_vertices; i++){
//             if(selectedList[i]){
//                 for(let j = 0 ; j<=no_of_vertices ; j++ ){
//                     if(!selectedList[j] && arr[i][j]){
//                         if(min > arr[i][j]){
//                             min = arr[i][j]
//                             x = i;
//                             y = j;
//                         }
//                     }
//                 }
//             }
//         }
//         console.log(`${String(x)} -> ${String(y)} : ${String(arr[x][y])}`);
//         selectedList[y] = true;
//         no_of_edge++;
//     }
// }



// const result = primsAlg(arr);

function minKey(key, mstSet)
{
	// Initialize min value
	let min = Number.MAX_VALUE, min_index;

	for (let v = 0; v < V; v++)
		if (mstSet[v] == false && key[v] < min)
			min = key[v], min_index = v;

	return min_index;
}

// A utility function to print the
// constructed MST stored in parent[]
function printMST(parent, graph)
{
	document.write("Edge 	 Weight" + "<br>");
	for (let i = 1; i < V; i++)
		document.write(parent[i] + "  - " + i + "  " + graph[i][parent[i]] + "<br>");
}

// Function to construct and print MST for
// a graph represented using adjacency
// matrix representation
function primMST(graph)
{
	// Array to store constructed MST
	let parent = [];
	
	// Key values used to pick minimum weight edge in cut
	let key = [];
	
	// To represent set of vertices included in MST
	let mstSet = [];

	// Initialize all keys as INFINITE
	for (let i = 0; i < V; i++)
		key[i] = Number.MAX_VALUE, mstSet[i] = false;

	// Always include first 1st vertex in MST.
	// Make key 0 so that this vertex is picked as first vertex.
	key[0] = 0;
	parent[0] = -1; // First node is always root of MST

	// The MST will have V vertices
	for (let count = 0; count < V - 1; count++)
	{
		// Pick the minimum key vertex from the
		// set of vertices not yet included in MST
		let u = minKey(key, mstSet);

		// Add the picked vertex to the MST Set
		mstSet[u] = true;

		// Update key value and parent index of
		// the adjacent vertices of the picked vertex.
		// Consider only those vertices which are not
		// yet included in MST
		for (let v = 0; v < V; v++)

			// graph[u][v] is non zero only for adjacent vertices of m
			// mstSet[v] is false for vertices not yet included in MST
			// Update the key only if graph[u][v] is smaller than key[v]
			if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v])
				parent[v] = u, key[v] = graph[u][v];
	}

	// print the constructed MST
	printMST(parent, graph);
}


let graph = [ [ 0, 2, 0, 6, 0 ],
[ 2, 0, 3, 8, 5 ],
[ 0, 3, 0, 0, 7 ],
[ 6, 8, 0, 0, 9 ],
[ 0, 5, 7, 9, 0 ] ];

primMST(graph);

