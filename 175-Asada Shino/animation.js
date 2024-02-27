var blink;

function init(entity, model) {
	model.getBone("scarf_left_1").physicalize(0, 5, 0.5, 0, 0);
	model.getBone("scarf_left_2").physicalize(0, 5, 0.8, 0, 0);
	model.getBone("scarf_left_3").physicalize(0, 5, 0.8, 0, 0);

	model.getBone("scarf_right_1").physicalize(0, 5, 0.5, 0, 0);
	model.getBone("scarf_right_2").physicalize(0, 5, 0.8, 0, 0);
	model.getBone("scarf_right_3").physicalize(0, 5, 0.8, 0, 0);

	var scale = 0.75;
	var bones = [
		model.getBone("builtin_chestplate_body_body"),
		model.getBone("builtin_chestplate_left_left_arm"),
		model.getBone("builtin_chestplate_right_right_arm"),
		model.getBone("builtin_item_left_left_arm"),
		model.getBone("builtin_item_right_right_arm"),
		model.getBone("builtin_leggings_body_body"),
		model.getBone("builtin_leggings_left_left_leg"),
		model.getBone("builtin_leggings_right_right_leg"),
		model.getBone("builtin_boots_left_left_leg"),
		model.getBone("builtin_boots_right_right_leg"),
		model.getBone("builtin_cape_body"),
		model.getBone("builtin_elytra_none"),
	];

	for (var i in bones) {
		bones[i].setScaleX(scale);
		bones[i].setScaleY(scale);
		bones[i].setScaleZ(scale);
	}

	bones[0].setScaleZ(1.05);
	blink = model.getBone("blink");
}

function update(entity, model) {
	blink.setVisible(entity.getAge() % 60 < 5);
}

function tick(entity, model) {

}
