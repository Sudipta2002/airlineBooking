class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud repository");
            throw { error }
        }
    }
    async destroy(modelId) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the crud repository");
            throw { error }
        }
    }
    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud repository");
            throw { error }
        }
    }
    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud repository");
            throw { error }
        }
    }
    async update(modelId, data) {
        try {
            const user = await this.model.findByPk(modelId);
            user.name = data.name;
            await user.save();
            return user;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = CrudRepository;