function createDataset(fields, constraints, sortFields) {
	
	var ds = DatasetBuilder.newDataset();
	
	ds.addColumn("login");
	ds.addColumn("nome");

	//Criar uma array de filtros
	var filtroGrupo = DatasetFactory.createConstraint("collegueGroupPK.groupId","ResponsaveisQs","ResponsaveisQs",ConstraintType.MUST);
	
	//consultar dataset collegueGroup
	var datasetGrupo = DatasetFactory.getDataset("collegueGroup", null, new Array(filtroGrupo), null);
	
	for (i = 0; i < datasetGrupo.rownCount ;i++){
		var colabGrupo = datasetGrupo.getValue(i, "collegueGroupPK.collegueId");
		
		var datasetColaborador = DatasetFactory.getDataset("collegueGroup", null, null, null);
		
		for (j = 0; j < datasetColaborador.rowsCount ;j++){
			var colabCol = datasetGrupo.getValue(j, "colleguePK.collegueId");
			var colabNome = datasetGrupo.getValue(j, "collegueName");
			
			//Se for igual, add em um novo dataset
			if(colabcol == colabGrupo){
				ds.addrow(new Array(colabCol,colabNome));
				
			}
		}
	}
	
	return ds;
}