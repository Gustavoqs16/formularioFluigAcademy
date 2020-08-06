function createDataset(fields, constraints, sortFields) {
	
	//criando Dataset
	var ds = DatasetBuilder.newDataset();
	
	//add colunas no dataset
	ds.addColumn("simbolo");
	ds.addColumn("nomeMoeda");
	
	
	//add linhas no dataset
	ds.addRow(new Array("R$","Real"));
	ds.addRow(new Array("US$","Dólar Americano"));
	ds.addRow(new Array("U$","Peso Uruguaio"));
	
	return ds;
	
	
}