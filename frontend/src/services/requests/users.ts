import { api } from '../api';

export const addToTeam = async (userIds: number[], teamId: number) => {
    return await api.put('user/addtoteam', {
        userIds,
        teamId,
    })
}

export const getUserLight = async () => {
    let response = await api.get('user/all/light')
    return response.data
}

export const changePermission = async (id: number, perm: string) => {
    return await api.put('user/permission', {
        id,
        perm,
    })
}

export const updateUser = async (first_name: string, last_name: string, birthday: string, contact: string, discord_id: string) => {
    return await api.put('user/updateuser', {
        first_name, 
        last_name,  
        birthday, 
        contact,
        discord_id
    })
}

export const getCurrentUser = async () => {
    const response = await api.get("user/current")
    return response?.data.data ;
};


export const getUsersbyTeam = async (teamId : number) => {
    const response = await api.get("user/getbyteam/"+teamId)
    return response?.data.data ;
};

export const modifyUserTeam = async (members: [], teamId: number[]) => {
    return await api.post("user/modifyteam", {
      members,
      teamId
    });
  };

  export const deleteUser = async (id: number) => {
    const response = await api.delete("user/delete/"+id)
    return response ;
};

export const getAllNewSudents = async () => {
    const response = await api.get("user/allnewstudents")
    return response?.data.data ;
};