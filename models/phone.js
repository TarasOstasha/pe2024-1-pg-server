class Phone {
    static async create ({ brand, model, os, screen_size, ram, storage_capacity, battery_capacity, camera_megapixels, price, release_date, is_dual_sim }) {
      try {
        const query = `
          INSERT INTO Phones (brand, model, os, screen_size, ram, storage_capacity, battery_capacity, camera_megapixels, price, release_date, is_dual_sim)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          RETURNING *; 
        `;
  
        const {
          rows: [createdPhone],
        } = await Phone.pool.query(query, [brand, model, os, screen_size, ram, storage_capacity, battery_capacity, camera_megapixels, price, release_date, is_dual_sim]);
  
        return createdPhone;
      } catch (err) {
        throw err;
      }
    }
  
    static async getAll (limit, offset) {
      try {
        const query = `
          SELECT *
          FROM Phones
          ORDER BY id
          LIMIT $1 OFFSET $2
        `;
        const { rows } = await Phone.pool.query(query, [limit, offset]);
  
        return rows;
      } catch (err) {
        throw err;
      }
    }
  
    static async getById (PhoneId) {
      try {
        const query = `
        SELECT *
        FROM Phones 
        WHERE id = $1;
      `;
  
        const {
          rows: [foundPhone],
        } = await Phone.pool.query(query, [PhoneId]);
  
        return foundPhone;
      } catch (err) {
        throw err;
      }
    }
  
    static async updateById(
        { brand, model, os, screen_size, ram, storage_capacity, battery_capacity, camera_megapixels, price, release_date, is_dual_sim },
        PhoneId
      ) {
        try {
          const query = `
            UPDATE Phones
            SET brand = $1, 
                model = $2,
                os = $3,
                screen_size = $4,
                ram = $5,
                storage_capacity = $6,
                battery_capacity = $7,
                camera_megapixels = $8,
                price = $9,
                release_date = $10,
                is_dual_sim = $11
            WHERE id = $12
            RETURNING *;
          `;
      
          const {
            rows: [updatedPhone],
          } = await Phone.pool.query(query, [
            brand, model, os, screen_size, ram, storage_capacity, battery_capacity, camera_megapixels, price, release_date, is_dual_sim, PhoneId,
          ]);
      
          return updatedPhone;
        } catch (err) {
          throw err;
        }
      }
      
  
    static async deleteById (phoneId) {
      try {
        const query = `
          DELETE FROM Phones
          WHERE id = $1
          RETURNING 1;
        `;
  
        const {
          rows: [foundPhone],
        } = await Phone.pool.query(query, [phoneId]);
  
        return foundPhone;
      } catch (err) {
        throw err;
      }
    }
  }
  
  module.exports = Phone;
  